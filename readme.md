
**Get Post**
```
query {
  getPost(id: 2) {
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
