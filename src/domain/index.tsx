const Form = () => {
  return (
    <form>
      <div>
        환급을 진행할 대상을 선택해주세요.
        <input type="radio" value="병의원" name="kind" id="kindFirst" />
        <label htmlFor="kindFirst">병의원</label>
        <input type="radio" value="법인기업" name="kind" id="kindSecond" />
        <label htmlFor="kindSecond">일반</label>
      </div>

      <div>
        사업자 유형을 선택해주세요.
        <input
          type="radio"
          value="개인사업자"
          name="enterpreneur"
          id="enterpreneurFirst"
        />
        <label htmlFor="enterpreneurFirst">개인 사업자</label>
        <input
          type="radio"
          value="법인사업자"
          name="enterpreneur"
          id="enterpreneurSecond"
        />
        <label htmlFor="enterpreneurSecond">법인 사업자</label>
      </div>
    </form>
  );
};

export default Form;
