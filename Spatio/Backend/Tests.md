### TDD

A idéia central do nosso backend é que todos módulos possuem testes unitários e de integração. No TDD primeiro se escreve o teste e, depois, o código de fato. 

Isso vai de encontro com o método "tentativa e erro até funcionar e terminei" que a maioria de nós tem como modus operandi.

Testes garantem que mudanças em funcionalidades no futuro que porventura causem problemas inesperados, sejam identificadas antes de cairem em produção.

Com testes que realmente emulam como o sistema deve funcionar, partes do código podem ser refatoradas ou alteradas com confiança, pois os testes irão capturar qualquer erro que seja introduzido.

### Tipos de testes

**Unit Test**: Teste lógica interna. Pode ser uma função, um serviço ou componente. Ideal para testar regras de negócios, cálculos, etc.

**Integration Test**: Ideal para testar a interação entre banco de dados e software. Neste teste de fato sobe um banco de dados (em memória ou um banco físico em container docker) e é mais próximo a um cenário real.

**e2e**: End-to-end são reservados para testar jornadas de usuário em um ambiente similar ao de produção.

### Teste de service

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;

  // Mocking dependencies
  const mockCatsRepository = {
    find: jest.fn().mockImplementation(() => Promise.resolve(['cat1', 'cat2'])),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService,
        {
          provide: 'CatsRepository',
          useValue: mockCatsRepository,
        },
      ],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should return an array of cats', async () => {
    expect(await service.findAll()).toEqual(['cat1', 'cat2']);
  });
});
```
### Teste de controller

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('CatsController', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cats (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect('This action returns all cats');
  });
});
```

### Teste de integração

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { CatService } from './cat.service';
import { Cat, CatSchema } from './schemas/cat.schema';

describe('CatService Integration Tests', () => {
  let service: CatService;
  let mongod: MongoMemoryServer;

  beforeAll(async () => {
    mongod = new MongoMemoryServer();
    const uri = await mongod.getUri();

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri),
        MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
      ],
      providers: [CatService],
    }).compile();

    service = module.get<CatService>(CatService);
  });

  afterAll(async () => {
    await mongod.stop();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a cat', async () => {
    const catDto = { name: 'Test Cat', age: 4, breed: 'Test Breed' };
    const createdCat = await service.create(catDto);

    expect(createdCat._id).toBeDefined();
    expect(createdCat.name).toBe(catDto.name);
  });
});
```

### Teste e2e

Exemplo: https://github.com/neo4j-examples/nestjs-neo4j-realworld-example/blob/master/test/app.e2e-spec.ts


