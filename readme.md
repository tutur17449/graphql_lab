**Get Post**

```
query {
  getPost(id: "dnAFVJpauQrmASNsxuPbcH") {
    id
    title
    content
    author {
      id
      name
      age
    }
  }
}
```

**Create Post**

```
mutation {
  createPost(postData: {title: "t", content: "t", author: "srzsawudn3TQXKTyJqft74"}) {
  	id
  }
}
```

**Update Post**

```
mutation {
  updatePost(id: "dnAFVJpauQrmASNsxuPbcH", postData: {title: "newTitle", content: "newContent"}) {
  	id
    title
    content
    author {
      id
      name
    }
  }
}
```

**Delete Post**

```
mutation {
  deletePost(id: "dnAFVJpauQrmASNsxuPbcH") {
  	id
    title
    content
    author {
      id
      name
    }
  }
}
```
