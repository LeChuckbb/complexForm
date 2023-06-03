import Button from "../components/button";
import Callout from "../components/callout";
import Flex from "../components/flex";
import InputBox from "../components/inputBox";
import ProgressBar from "../components/progressbar";
import * as S from "./style";

const Form = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.Container>
      <S.Form method="post" onSubmit={onSubmit}>
        <S.FormTitle>
          환급 진행에 필요한
          <br />
          정보를 입력해주세요
        </S.FormTitle>

        <ProgressBar />

        <InputBox>
          <Flex>
            <InputBox.Title>환급을 진행할 대상을 선택해주세요.</InputBox.Title>
          </Flex>
          <Flex direction="column" gap="8px">
            <InputBox.Radio name="kind" id="kindFirst">
              병의원
            </InputBox.Radio>
            <InputBox.Radio name="kind" id="kindSecond">
              일반
            </InputBox.Radio>
          </Flex>
        </InputBox>

        <InputBox>
          <Flex>
            <InputBox.Title>사업자 유형을 선택해주세요.</InputBox.Title>
          </Flex>
          <Flex direction="column" gap="8px">
            <InputBox.Radio name="enterpreneur" id="enterpreneurFirst">
              개인사업자
            </InputBox.Radio>
            <InputBox.Radio name="enterpreneur" id="enterpreneurSecond">
              법인사업자
            </InputBox.Radio>
          </Flex>
        </InputBox>

        <Callout>
          <Callout.Title>
            <b>병의원을 운영 중이시군요!</b>
          </Callout.Title>
          <Callout.Body>
            원장님! 환급액 검토를 위한 <b>간편인증</b>에 필요한 정보를
            입력해주세요
          </Callout.Body>
        </Callout>

        <InputBox>
          <Flex>
            <InputBox.Title>성함을 입력해주세요.</InputBox.Title>
          </Flex>
          <Flex direction="column" gap="8px">
            <InputBox.Text placeholder="성함 입력" />
          </Flex>
        </InputBox>

        <InputBox>
          <Flex>
            <InputBox.Title>휴대폰번호를 입력해주세요.</InputBox.Title>
          </Flex>
          <Flex direction="column">
            <InputBox.Text placeholder="-빼고 입력" type="tel" />
          </Flex>
        </InputBox>

        <InputBox>
          <Flex>
            <InputBox.Title>주민등록번호를 입력해주세요</InputBox.Title>
          </Flex>
          <Flex direction="row" gap="8px">
            <InputBox.Text placeholder="앞 6자리" />
            -
            <InputBox.Text placeholder="뒤 7자리" type="password" />
          </Flex>
        </InputBox>

        <InputBox>
          <Flex>
            <InputBox.Title>필수 약관에 동의해주세요</InputBox.Title>
          </Flex>
          <Flex direction="column" gap="8px">
            <InputBox.Checkbox id="termsFirst">
              [필수]개인정보 이용 동의
            </InputBox.Checkbox>
            <InputBox.Checkbox id="termsSecond">
              [필수]제 3자 정보제공 동의
            </InputBox.Checkbox>
          </Flex>
        </InputBox>

        <Flex>
          <Button>개인인증</Button>
          <Button>공인인증</Button>
        </Flex>

        <Callout>
          <Callout.Title>
            <b>원장님!</b> 정확한 환급액 검토를 위해 아래 내역 조회로 카카오{" "}
            <b>간편인증</b>을 2회 진행합니다.
          </Callout.Title>
          <Callout.Body>
            <Flex direction="column" gap="8px">
              <span>&middot; 홈택스: 세금 신고 내역</span>
              <span>&middot; 근로복지공단: 사원 신고 내역</span>
            </Flex>
          </Callout.Body>
        </Callout>

        <Button>예상 환급액 조회하기</Button>
      </S.Form>
    </S.Container>
  );
};

export default Form;
