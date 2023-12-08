import * as S from './style';

function Screen({ children }: any) {
  return (
    <>
      <S.Page>
        <S.Container>{children}</S.Container>
      </S.Page>
    </>
  );
}

export default Screen;
