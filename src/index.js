/*
1. On the page, there is a `div` with the id of `"dog-bar"`. When the page loads,
use `fetch` to get all of the pup data from your server. When you have this
information, you'll need to add a `span` with the pup's name to the dog bar (ex:
`<span>Mr. Bonkers</span>`).

2. When a user clicks on a pup's `span` in the `div#dog-bar`, that pup's info
(`image`, `name`, and `isGoodDog` status) should show up in the `div` with the
id of `"dog-info"`. Display the pup's info in the `div` with the following
elements:

- an `img` tag with the pup's image url
- an `h2` with the pup's name
- a `button` that says `"Good Dog!"` or `"Bad Dog!"` based on whether
  `isGoodDog` is true or false. Ex:

```html
<img src="dog_image_url" />
<h2>Mr. Bonkers</h2>
<button>Good Dog!</button>
```
3. When a user clicks the Good Dog/Bad Dog button, two things should happen:

- The button's text should change from Good to Bad or Bad to Good
- The corresponding pup object in the database should be updated to reflect the
  new isGoodDog value

You can update a dog by making a `PATCH` request to `/pups/:id` and including
the updated `isGoodDog` status in the body of the request.
*/


fetch(" http://localhost:3000/pups")
.then(response => response.json())
.then(pups => pups.forEach(pup => renderPup(pup)))

function renderPup(pup) {
    const dogBar = document.querySelector("#dog-bar")

    const dogNameSpan = document.createElement('span')
    dogNameSpan.textContent = pup.name

    dogBar.append(dogNameSpan)

    dogNameSpan.addEventListener("click", () => {
        const selectedDogSpan = document.querySelector("#dog-info")
        selectedDogSpan.textContent = pup.name

        const dogImage = document.createElement('img')
        dogImage.src = pup.image

        const dogName = document.createElement('h2')
        dogName.textContent = pup.name

        const isGoodDog = document.createElement('button')
        isGoodDog.textContent = pup.isGoodDog ? "Good Dog!" : "Bad Dog!"

        isGoodDog.addEventListener("click", () => {
            pup.isGoodDog = !pup.isGoodDog
            isGoodDog.textContent = pup.isGoodDog ? "Good Dog!" : "Bad Dog!";
           
        })

        selectedDogSpan.append(dogImage, dogName, isGoodDog)
    })
    
    
    
}