function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
    var textElement = document.getElementById('text');
    console.log(textElement);
    if (this.checked) {
      textElement.style.backgroundColor = 'red';
    } else {
      textElement.style.backgroundColor = '';
    }
}
