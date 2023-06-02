import Button from "../components/button";
import Callout from "../components/callout";
import InputBox from "../components/inputBox";

const Form = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form method="post" onSubmit={onSubmit}>
      <InputBox>
        <InputBox.Title>환급을 진행할 대상을 선택해주세요.</InputBox.Title>
        <InputBox.Radio name="kind" id="kindFirst">
          병의원
        </InputBox.Radio>
        <InputBox.Radio name="kind" id="kindSecond">
          일반
        </InputBox.Radio>
      </InputBox>

      <InputBox>
        <InputBox.Title>사업자 유형을 선택해주세요.</InputBox.Title>
        <InputBox.Radio name="enterpreneur" id="enterpreneurFirst">
          개인사업자
        </InputBox.Radio>
        <InputBox.Radio name="enterpreneur" id="enterpreneurSecond">
          법인사업자
        </InputBox.Radio>
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
        <InputBox.Title>성함을 입력해주세요.</InputBox.Title>
        <InputBox.Text placeholder="성함 입력" />
      </InputBox>

      <InputBox>
        <InputBox.Title>휴대폰번호를 입력해주세요.</InputBox.Title>
        <InputBox.Text placeholder="-빼고 입력" type="tel" />
      </InputBox>

      <InputBox>
        <InputBox.Title>주민등록번호를 입력해주세요</InputBox.Title>
        <InputBox.Text placeholder="앞 6자리" />
        -
        <InputBox.Text placeholder="뒤 7자리" type="password" />
      </InputBox>

      <InputBox>
        <InputBox.Title>필수 약관에 동의해주세요</InputBox.Title>
        <InputBox.Checkbox id="termsFirst">
          [필수]개인정보 이용 동의
        </InputBox.Checkbox>
        <InputBox.Checkbox id="termsSecond">
          [필수]제 3자 정보제공 동의
        </InputBox.Checkbox>
      </InputBox>

      <div>
        <Button>개인인증</Button>
        <Button>공인인증</Button>
      </div>

      <Callout>
        <Callout.Title>
          <b>원장님!</b> 정확한 환급액 검토를 위해 아래 내역 조회로 카카오{" "}
          <b>간편인증</b>을 2회 진행합니다.
        </Callout.Title>
        <Callout.Body>
          <span>&middot; 홈택스: 세금 신고 내역</span>
          <span>&middot; 근로복지공단: 사원 신고 내역</span>
        </Callout.Body>
      </Callout>

      <Button>예상 환급액 조회하기</Button>
    </form>
  );
};

export default Form;
