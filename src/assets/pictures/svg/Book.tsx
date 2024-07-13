import React from "react";

const BookIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "#0f0f0f",
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
    <path
      fill={fill}
      fillRule="evenodd"
      d="M76.668 13.332c0-2.945-3.816-3.992-6.344-4.687-.23-.063-.453-.125-.66-.184a47.657 47.657 0 0 0-12.996-1.793c-5.746 0-10.484 1.91-13.738 3.77-.496.285-1.02.68-1.492 1.035-.626.468-1.165.87-1.438.87-.273 0-.813-.402-1.438-.87-.472-.356-.996-.75-1.492-1.036-3.254-1.859-7.992-3.769-13.738-3.769-5.367 0-9.844.894-12.996 1.793-.2.059-.414.117-.637.176-2.511.695-6.367 1.754-6.367 4.695v43.336c0 1.152.598 2.227 1.582 2.836 1.563.965 3.625.117 5.453-.629.64-.262 1.25-.512 1.797-.672 2.68-.766 6.535-1.535 11.168-1.535 4.207 0 7.352 1.387 9.711 2.836.61.375 1.219.851 1.848 1.34 1.554 1.207 3.207 2.488 5.109 2.488 1.906 0 3.55-1.277 5.102-2.484.628-.489 1.242-.97 1.855-1.344 2.36-1.45 5.504-2.836 9.711-2.836 4.633 0 8.488.77 11.168 1.535.574.168 1.195.43 1.844.703 1.8.762 3.785 1.598 5.406.598a3.346 3.346 0 0 0 1.582-2.836Zm-65.559 1.86A1.61 1.61 0 0 0 10 16.737v32.926c0 1.113 1.07 1.914 2.152 1.652A47.888 47.888 0 0 1 23.332 50c5.879 0 10.266 1.996 13.336 3.906V18.188a23.165 23.165 0 0 0-2.906-1.961c-2.578-1.473-6.176-2.895-10.43-2.895-5.281 0-9.566 1.012-12.223 1.86ZM56.668 50c-5.879 0-10.266 1.996-13.336 3.906V18.188a23.165 23.165 0 0 1 2.906-1.961c2.578-1.473 6.176-2.895 10.43-2.895 5.281 0 9.566 1.012 12.223 1.86A1.61 1.61 0 0 1 70 16.737v32.926c0 1.113-1.07 1.914-2.152 1.652A47.888 47.888 0 0 0 56.668 50Zm0 0"
    />
    <path
      fill={fill}
      fillRule="nonzero"
      d="M6.957 68.027c-.75-1.68 0-3.648 1.68-4.402 1.562-.695 3.175-1.277 4.8-1.8 2.7-.864 6.426-1.825 9.895-1.825 3.89 0 7.211 2.098 9.617 3.617l.364.227C36.117 65.605 38 66.668 40 66.668c1.996 0 3.871-1.059 6.672-2.82.113-.075.23-.149.351-.223C49.43 62.102 52.753 60 56.668 60c3.488 0 7.215.96 9.91 1.828a50.862 50.862 0 0 1 4.676 1.75c1.687.746 2.558 2.734 1.785 4.457-.75 1.668-2.754 2.406-4.414 1.668a42.165 42.165 0 0 0-4.09-1.531c-2.488-.8-5.426-1.504-7.867-1.504-1.863 0-3.656 1.062-6.645 2.945-2.476 1.563-5.898 3.719-10.023 3.719-4.129 0-7.559-2.16-10.043-3.723-2.996-1.886-4.781-2.941-6.625-2.941-2.418 0-5.36.703-7.855 1.508-1.391.445-2.778.941-4.114 1.535-1.68.75-3.652 0-4.406-1.684Zm0 0"
    />
  </svg>
);

export default BookIcon;