const forms = document.querySelectorAll('.comment-form');

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const commentText = form.comment.value.trim();

    if (username && commentText) {
      
      const commentList = form.closest('.post').querySelector('.comment-list');
  
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.innerHTML = `
        <p class="comment-author">${username}:</p>
        <p class="comment-text">${commentText}</p>
      `;

      commentList.appendChild(newComment);
  
      form.reset();
    }
  });
});
