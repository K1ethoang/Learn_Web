var users = [
  {
    id: 1,
    name: "Hiep Hoa",
  },
  {
    id: 2,
    name: "Kiet Hoang",
  },
  {
    id: 3,
    name: "Phuong Hoang",
  },
  //...
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Hay qua",
  },
  {
    id: 2,
    user_id: 2,
    content: "Good job anh",
  },
  {
    id: 3,
    user_id: 1,
    content: "Hic em làm sai rồi",
  },
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id, từ user_id lấy ra user tương ứng

// Fake API
function getComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
}

function getUserByIds(userIds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      var result = users.filter((user) => {
        console.log(userIds.includes(user.id));
        return userIds.includes(user.id);
      });
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then((comments) => {
    var userIds = comments.map((comment) => {
      return comment.user_id;
    });
    return getUserByIds(userIds).then((users) => {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then((data) => {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach((comment) => {
      var user = data.users.find((user) => {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });

    commentBlock.innerHTML = html;
  });
