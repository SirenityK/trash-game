const colors = {
  Plástico: {
    mainColor: "#D34D50",
    secondaryColor: "#B34748",
  },
  Orgánico: {
    mainColor: "#9EC44E",
    secondaryColor: "#6BA084",
  },
  Inorgánico: {
    mainColor: "#1F1F1F",
    secondaryColor: "#000000",
  },
  Aluminio: {
    mainColor: "#4E4E4E",
    secondaryColor: "#363636",
  },
};

export function getColor(index: number) {
  switch (index) {
    case 0:
      return "Plástico";
    case 1:
      return "Orgánico";
    case 2:
      return "Inorgánico";
    case 3:
      return "Aluminio";
  }
}

export function Trashcan({
  type,
  onClick: handler,
}: {
  type: string;
  onClick: () => void;
}) {
  return (
    <div class="col trashcan">
      <svg
        className="img-fluid"
        onClick={() => handler()}
        width="286"
        height="428"
        viewBox="0 0 286 428"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.2483 108.242C14.1122 102.626 18.6276 98 24.2454 98H261.755C267.372 98 271.888 102.626 271.752 108.242L264.237 418.242C264.105 423.669 259.668 428 254.239 428H31.7605C26.3321 428 21.895 423.669 21.7635 418.242L14.2483 108.242Z"
          fill={colors[type].mainColor}
        />
        <rect
          y="79"
          width="286"
          height="29"
          fill={colors[type].secondaryColor}
        />
        <path d="M22 0H264L272 79H14L22 0Z" fill={colors[type].mainColor} />
        <rect x="49" y="20" width="188" height="39" rx="10" fill="#E5E4E5" />
        <path
          d="M231.199 299.735L223.056 286.071L205.547 295.143L213.681 308.779C214.161 309.575 214.509 310.397 214.722 311.243C215.1 312.784 215.052 314.39 214.582 315.909C214.337 316.679 213.987 317.416 213.54 318.103C212.695 319.452 211.5 320.581 210.065 321.388C208.507 322.238 206.731 322.68 204.926 322.667H158.841V304L118.775 332L158.841 360V341.333H204.926C207.711 341.333 210.455 340.988 213.049 340.316C218.06 339.027 222.618 336.528 226.261 333.073C228.044 331.403 229.587 329.527 230.829 327.539C234.773 321.311 235.979 313.903 234.194 306.865C233.528 304.379 232.522 301.982 231.199 299.735ZM77.3276 257.698L54.1898 300.817C52.9851 303.047 52.1059 305.417 51.5755 307.864C50.5995 312.444 50.8681 317.178 52.3568 321.637C53.8456 326.095 56.5072 330.135 60.0994 333.391C61.8823 335.021 63.8689 336.43 66.0592 337.619C70.6281 340.062 75.806 341.343 81.0737 341.333H98.7426V322.667H81.0737C79.3191 322.678 77.5921 322.26 76.0655 321.453C74.6119 320.662 73.3958 319.542 72.5297 318.196C71.6503 316.878 71.1374 315.377 71.0373 313.828C70.9963 313.062 71.0569 312.294 71.2176 311.541C71.3979 310.726 71.6951 309.93 72.1091 309.152L94.706 267.04L110.722 275.655L104.732 229.334L58.6771 247.664L77.3276 257.698ZM204.896 275.664L210.886 229.334L194.479 238.154L166.003 190.395C164.015 186.998 161.281 184.03 157.979 181.684C154.678 179.337 150.883 177.666 146.841 176.778C144.307 176.228 141.71 175.968 139.109 176.003C133.812 176.094 128.636 177.489 124.104 180.044C119.267 182.782 115.368 186.748 112.866 191.478L105.534 205.142L123.453 213.495L130.785 199.822C131.239 198.982 131.793 198.229 132.448 197.563C133.64 196.348 135.179 195.474 136.885 195.043C138.616 194.586 140.444 194.551 142.194 194.94C143.531 195.231 144.787 195.786 145.875 196.566C146.964 197.347 147.86 198.336 148.504 199.467L177.131 247.496L158.841 257.334L204.896 275.664Z"
          fill="#E5E4E5"
        />
      </svg>
    </div>
  );
}
