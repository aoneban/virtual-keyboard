const getSelectText = () => {
  const area = document.getElementById('input');
  const start = area.selectionStart;
  const end = area.selectionEnd;
  if (start !== end) {
    const selectedText = area.value.substring(start, end);
    return selectedText;
  }
  return null;
};

export default getSelectText;
