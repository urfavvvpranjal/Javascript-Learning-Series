let cards = document.querySelector(".cards");
let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "ojin oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
  {
    name: "kritika verma",
    pic: "https://plus.unsplash.com/premium_photo-1710846919262-0105a293c276?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
    bio: "soft smiles, louder dreams 🌸 | designer in progress",
  },
  {
    name: "rajveer singh",
    pic: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    bio: "chasing sunsets and simple things 🌇 | chill always",
  },
  {
    name: "ananya deshmukh",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    bio: "moonchild energy 🌙 | poet at heart",
  },
  {
    name: "arjun malhotra",
    pic: "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    bio: "work hard, stay humble 💪 | exploring life unfiltered",
  },
  {
    name: "nisha gupta",
    pic: "https://images.unsplash.com/photo-1688888745596-da40843a8d45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    bio: "peaceful mess ☁️ | journaling my chaos",
  },
  {
    name: "aryan joshi",
    pic: "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    bio: "chill > thrill 🌊 | music is my escape 🎧",
  },
  {
    name: "sara qureshi",
    pic: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    bio: "artsy soul 🖌️ | finding joy in little things",
  },
  {
    name: "rohan sehgal",
    pic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    bio: "thinking too much since ‘99 🧠 | less talk, more coffee ☕",
  },
  {
    name: "meher khan",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&  ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    bio: "lowkey chaos, highkey kind 💫 | self-taught dreamer",
  },
];



function showusers(users) {
  users.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("bg-img");
    // img.src = user.pic;
    img.setAttribute("src",user.pic)

    const blurredlayer = document.createElement("div");
    blurredlayer.classList.add("blurred-layer");
    blurredlayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.appendChild(h3);
    content.appendChild(p);
    
    card.appendChild(blurredlayer);
    card.appendChild(img);
    card.appendChild(content);

    cards.appendChild(card);
  });
}

showusers(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input",(inps)=>{
    let searchUsers = users.filter((user)=>{
        return user.name.startsWith(inps.target.value.toLowerCase());
    })
    document.querySelector(".cards").innerHTML="";
    showusers(searchUsers);
});