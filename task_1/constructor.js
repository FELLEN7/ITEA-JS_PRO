var mass = [
    {
      link: "#1",
      name: "Established fact",
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg"
    },
    {
      link: "#2",
      name: "Many packages",
      description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400859_file_162309.jpg"
    },
    {
      link: "#3",
      name: "Suffered alteration",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400896_file_162315.jpg"
    },{
      link: "#4",
      name: "Discovered source",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400878_file_162324.jpg"
    },{
      link: "#5",
      name: "Handful model",
      description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400876_file_162328.jpg"
    },
  ];

 for(var i=0; i < mass.length; i++)
 {
    Constructor(mass[i].name, mass[i].description, mass[i].image, mass[i].link);
 }

function Constructor(name, description, image)
{
    this.name = name;
    this.description = description;
    this.image = image;
    this.likes = 0;
    var post = document.createElement("div");
    var h1 = document.createElement("h1");
    var p = document.createElement("p");
    var img = document.createElement("img");
    var likes = document.createElement("div");
    var counter = document.createElement("div");


    likes.innerHTML = "Likes:";
    counter.innerHTML = this.likes;

    post.classList.add("post");
    likes.classList.add("likes");

    h1.innerHTML = name;
    p.innerHTML = description;
    img.setAttribute("src", this.image);
   
    likes.appendChild(counter);
    post.appendChild(img);
    post.appendChild(h1);
    post.appendChild(p);
    post.appendChild(likes);

    likes.addEventListener("click", CountLikes);
    document.body.appendChild(post);

}



function CountLikes(e)
{
  let target = e.target.childNodes[1].innerHTML;
  var counter = Number(target);
  counter++;
  e.target.childNodes[1].innerHTML = counter;
}
