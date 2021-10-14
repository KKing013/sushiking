const data = [
    {
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit iste, iure qui eius voluptate totam excepturi illo. Rem doloribus ullam molestias nostrum a voluptas fuga fugit velit assumenda deleniti.',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'Jen Smith',
        review: 'Proin dictum, magna et egestas fermentum, nisi elit pharetra velit, eu aliquam quam mauris vel libero. Aliquam ipsum nibh, sagittis et rhoncus eu, scelerisque nec odio. Cras ut bibendum lectus, faucibus vulputate tortor.',
        image: 'https://randomuser.me/api/portraits/women/80.jpg'
    },
    {
        name: 'William Johnson',
        review: 'Curabitur convallis, dolor vel egestas malesuada, mauris dolor vulputate ex, nec pulvinar eros nibh sollicitudin nisi. Morbi vitae arcu quis odio blandit feugiat ac et sapien. Donec quis tortor non nisl sagittis dapibus.',
        image: 'https://randomuser.me/api/portraits/men/81.jpg'
    },
    {
        name: 'Anne Smith',
        review: 'Pellentesque aliquet tortor eu varius pretium. Integer luctus, tellus quis elementum congue, nulla nunc imperdiet arcu, et faucibus felis ex sit amet elit. Sed ac dignissim arcu. Nullam eget nulla non sem egestas dignissim a sed sapien.',
        image: 'https://randomuser.me/api/portraits/women/81.jpg'
    },
    {
        name: 'Ted Johnson',
        review: 'Duis sollicitudin magna sed magna ullamcorper, vitae pretium turpis luctus. Ut dictum ornare dui hendrerit imperdiet. Donec pharetra mi ex, sed egestas magna condimentum vel. Pellentesque lorem augue, ',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },

];

const profiles = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {

    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
    
    document.getElementById('profileDisplay').innerHTML = 
    `<ul class="list-group">
    <li class="list-group-item bg-dark text-light">${currentProfile.name}</li>
    <li class="list-group-item bg-dark text-light">${currentProfile.review}</li>
    </ul>`;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" class="rounded-circle mb-3">`;
    }else {

        window.location.reload();

    }

}


function profileIterator(profiles) {
    
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}