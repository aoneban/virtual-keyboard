const addAndRemoveActive = (code) => {
  document.querySelector(code).classList.add('active');
  setTimeout(() => {
    document.querySelector(code).classList.remove('active');
  }, 200);
};

export default addAndRemoveActive;
