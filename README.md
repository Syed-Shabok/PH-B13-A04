# Job Application Tracker

<p align="left">
  <a href="https://syed-shabok.github.io/PH-B13-A04/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Click%20Here-success?style=for-the-badge">
  </a>
</p>


---

# Assignment 4 Q&A:

## **1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

Answer:  

- getElementById(”id”) fetches a single unique element from the DOM tree based on the element id that is provided as the parameter. It runs faster that other element fetching methods.
    
    Example: `document.getElementById("interview-toggle-btn");`
    
- getElemetsByClassName(”class”) fetches all the elements with the same class name and returns it as an HTMLCollection, which is an array like list (not exactly like an array). The collection is live and can update automatically if the DOM tree changes.
    
    Example: `document.getElementsByClassName("delete-btn");`
    
- querySelector("selector"): It is a more versatile element fetcher that allows users to search for elements by providing more complex and precise selectors. It fetches the first element that matches the complex selector provided as the parameter.
    
    Example: `document.querySelector(".job-title"`);
    
- querySelectorAll("selector"): It is similar to querySelector("selector"), however, it returns all elements that match the selector provided as paramater in the from of a NodeList, which is an an array like list (not exactly like an array). Unlike HTMLCollections, NodeLists are static and don’t automatically update when the DOM tree changes.
    
    Example: `document.querySelectorAll(".job-title");`
    

## **2. How do you create and insert a new element into the DOM?**

Answer: 

We can create a new element by using the command: **document.createElement("div");** (we can create other elements  besides div as well), after that we have the option to add styles to the element by using commands such as **myDiv.className = "bg-blue-500";** and we can also add text content using commands such as:  **myDiv.innerText = "Hello World";.** After that we must insert the element we created into the DOM, we can use commands such as: **.appendChild(myDiv)** or **.prepend(myDiv)** (there are more of such commands) ****to do so. 

Example: 

```jsx
let myDiv = document.createElement("div");
myDiv.innerText = “Hello World!”;
myDiv.className = ”bg-blue-500”;
document.body.appendChild(myDiv);
```

## **3. What is Event Bubbling? And how does it work?**

Answer: 

It is a  feature of the DOM. When we trigger an event on a child element (e.g. we click on a button that is the child  of a div) the event handler in the child element will fire first and then the event handlers in it’s parent element will fire, and then the event handlers of its parent’s parent will fire, in a successive manner all the way to the root element. It is similar to bubbles moving upwards, hence the name. 

  

## **4. What is Event Delegation in JavaScript? Why is it useful?**

Answer:

It is a technique that makes use of the Event Bubbling feature where, instead of adding event listeners to all child elements of a parent element, we can instead add a single event listener to parent element that can manage all events of its child elements, since events triggered on the child will eventually bubble up to trigger event listeners in the parent. We used this technique in this project. It is useful because it improves performance, by reducing the number of event listeners in the DOM.

Example: 

```jsx
jobHolder.addEventListener("click", function (event) {
  if (event.target.closest(".delete-btn")) {
    let jobName = event.target
      .closest(".job-card")
      .querySelector(".job-title").innerText;

    deleteJob(jobName);
  }
  });
```

## **5. What is the difference between preventDefault() and stopPropagation() methods?**

Answer:

- preventDefault() blocks the browser’s default behavior for an given event, however, it does not stop Event Bubbling.
- **stopPropagation()**  prevents the Event Bubbling feature for a particular event, however, it does not stop the browser’s default behavior.
