import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

// import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom';

// import App from "../App";

// describe("App component", () => {
//   test("displays a top-level heading with the text `Hi, I'm _______`", () => {
//     render(<App />);
//     const topLevelHeading = screen.getByRole("heading", {
//       name: /hi, i'm/i,
//       level: 1,
//     });
//     expect(topLevelHeading).toBeInTheDocument();
//   });

//   test("renders a profile image with alt text and correct src", () => {
//     render(<App />);
//     // adjust the regex/alt text to match exactly what you'll put in App.js
//     const profileImage = screen.getByAltText(/photo of .*?/i);
//     expect(profileImage).toBeInTheDocument();
//     // replace 'path/to/your-image.jpg' with your actual src in App.js
//     expect(profileImage).toHaveAttribute("src", "path/to/your-image.jpg");
//   });

//   test("renders a second-level heading with the text `About Me`", () => {
//     render(<App />);
//     const aboutHeading = screen.getByRole("heading", {
//       name: /about me/i,
//       level: 2,
//     });
//     expect(aboutHeading).toBeInTheDocument();
//   });

//   test("renders a paragraph with the biography text", () => {
//     render(<App />);
//     // put a chunk of your bio here so the test matches something real
//     const bioText = /i am a software developer.*?/i;
//     const bioPara = screen.getByText(bioText);
//     expect(bioPara).toBeInTheDocument();
//     expect(bioPara.tagName).toBe("P");
//   });

//   test("renders a GitHub link with the correct href", () => {
//     render(<App />);
//     const githubLink = screen.getByRole("link", { name: /github/i });
//     expect(githubLink).toBeInTheDocument();
//     expect(githubLink).toHaveAttribute("href", "https://github.com/your-username");
//     expect(githubLink).toHaveAttribute("target", "_blank");
//   });

//   test("renders a LinkedIn link with the correct href", () => {
//     render(<App />);
//     const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
//     expect(linkedinLink).toBeInTheDocument();
//     expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/your-profile");
//     expect(linkedinLink).toHaveAttribute("target", "_blank");
//   });
// });
