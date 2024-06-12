### Updated `README.md` for the Birthday Buddy App

---

## Birthday Buddy App

The Birthday Buddy App is a delightful React application that displays a list of birthdays. It uses modern React features such as hooks to manage state and component-driven design to render each birthday entry. This app provides an excellent example of handling dynamic lists and state updates in React.

### Figma Design

Explore the UI design on Figma to see how the Birthday Buddy App should look visually:
[View Design](https://www.figma.com/file/e2vsLe9DMnXZIygNHkwGL1/Birthday-buddy?node-id=0%3A1&t=AGNWdO5QQGOoNCfD-1)

### Installation and Setup

To set up the Birthday Buddy App locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jocruz/Birthday-Buddy.git
   cd Birthday-Buddy
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

### Features

- **Dynamic List Rendering**: Dynamically renders a list of birthdays, each displaying the person's name, age, and a thumbnail image.
- **Interactive List Management**: Includes functionality to clear all entries with a single button click.
- **Responsive Design**: Adapts to different screen sizes, ensuring a great user experience on various devices.

### Technical Details

- **State Management**: Utilizes the `useState` hook for managing the list of birthday entries.
- **Component Architecture**: Leverages small, reusable components for clean and manageable code.

### Code Snippets

```jsx
import React from 'react';
import { useState } from 'react';
import { List } from './List';

function App() {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={clearList}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
```

### Links

- **GitHub Repository**: [Visit GitHub](https://github.com/jocruz/Birthday-Buddy)
- **Live Demo**: [See it Live](https://birthday-buddy-demo.netlify.app/)

---
