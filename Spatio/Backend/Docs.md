Repository: https://github.com/tryspatio/base-api
Swagger: https://api.welive.ws/docs/
Postman: https://github.com/tryspatio/base-api/blob/main/Live.postman_collection.json
Framework: https://docs.nestjs.com
Database: https://docs.nestjs.com/techniques/mongodb
### Como criar novas features/modules

Nest tem bastante boilerplate. Isso pode parecer negativo mas nos garante uma arquitetura mais robusta. Para não precisar escrever boilerplate sempre que criar algo novo, use os comandos do cli:

```bash
# instale nest cli globalmente
npm i -g @nestjs/cli

# gerar novo módulo
nest g module modules/<feature>

# gerar service
nest g service modules/<feature>

# gerar controller
nest g controller modules/<feature>
```

Ao utilizar o generator, **nest criará os arquivos necessários, sobrescreverá os imports dos modulos e criará o arquivo de teste com o boilerplate inicial**.

### Como modelar um documento no MongoDB?

Com o mongoose podemos definir um schema de um documento a ser adicionado a uma collection:

1. Criar o novo schema (para adicionar um relacionamento, usar prop **ref**):

```typescript
@Schema({ timestamps: true })
export class Status {
	@Transform(({ value }) => value.toString())
	_id: ObjectId;
	
	@Prop({ type: SchemaTypes.ObjectId, ref: 'Habit', required: true })
	habit: Habit;
	
	@Prop({ default: false })
	done: boolean;
	
	@Prop()
	day: Date;
	
	@Prop()
	comments: string;
}

export type StatusDocument = Status & Document;
export const StatusSchema = SchemaFactory.createForClass(Status);
```

2. Importar no module:

```typescript
@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Habit.name,
				schema: HabitSchema,
			},
		]),
	],
})
```
### Como criar um service?

1. Criar a interface do service:

```typescript
export interface IHabitService {
	findHabitById(_id: ObjectId): Promise<Habit>;
}
```

3. Criar o service implementando a interface:

```typescript
@Injectable()
export class HabitService implements IHabitService {
constructor(
	@InjectModel(Habit.name) private habitModel: Model<HabitDocument>
) {}

async findHabitById(_id: ObjectId): Promise<Habit> {
	return this.habitModel.findOne({ _id });
}

```

3. Configurar o provider no module:

```typescript
@Module({
	providers: [HabitService],
})
```
### Como criar um controller?

Nest utiliza o conceito de "routing controllers", pattern bem conhecido em linguagens orientadas a objeto.

1. Criar o controller. Neste exemplo o endpoint é **api/v1/habits/update-status**

```typescript
@Controller('habits')
export class HabitController {
	constructor(private habitService: HabitService) {}
	
	@Put('update-status')
	async status(@Body() statusDto: UpdateStatusDto) {
		return this.habitService.updateStatus(statusDto);
	}
}
```

2. Configurar no module:

```typescript
@Module({
	controllers: [HabitController]
})
```
### Como adicionar autenticação?

Projeto tem o guards configurados com JWT, basta importar no controller que precise de autenticação:

1. Decorar os endpoints/controllers que precisa de autenticação (caso seja apenas um endpoint coloque em cima da função, caso contrário coloque na classe que todos os endpoints passam a ser autenticados):

```typescript
@UseGuards(JwtAuthGuard)
@Controller('habits')
export class HabitController {}
```
### Como criar validações com Data Transfer Objects (DTOs)?

Referência: https://docs.nestjs.com/techniques/validation#auto-validation

O objetivo principal de um DTO é definir e transportar dados entre camadas e processos. 

Com o nest podemos criar um DTO e usuá-lo como **validator** em nossos endpoints.

```typescript
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { LogType, SystemEvent } from '../log.enum';

export class LogDto {
  @IsEnum(LogType)
  @IsNotEmpty({ message: 'Invalid type' })
  @ApiProperty()
  logType: LogType;

  @IsOptional()
  @ApiProperty()
  redirectUrl?: string;
}
```

E então importá-lo e usá-lo com o parameter decorator Body, para validação automática:

```typescript
  @Post()
  async createLog(@Body() logDto: LogDto) {
   return...
  }
```

No suposto `log.dto` foi definido que `logType` é um enum (e caso o valor recebido não esteja definido no enum, um **400 Bad Request com message: Invalid type será retornado**). 

Assim como foi definido que `redirectUrl` é opcional, portanto caso não esteja presente ou esteja vazio, a API irá processar o request mesmo assim.

**Sobre o Swagger**:
Basta adicionar a propriedade `@ApiProperty()` no DTO que a documentação é criada automaticamente.