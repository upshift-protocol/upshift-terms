export default function Logo({
  height = 60,
  width = 120,
}: {
  height?: number;
  width?: number;
}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 300"
        height={height}
        width={width}
      >
        <rect
          fill="#fff"
          x="367"
          y="107"
          width="30"
          height="128"
          rx="5"
          ry="5"
        />
        <path
          fill="#fff"
          d="M79,70v130c0,2.76-2.24,5-5,5h0c-2.76,0-5-2.24-5-5V70c0-2.76-2.24-5-5-5h-20c-2.76,0-5,2.24-5,5v160c0,2.76,2.24,5,5,5h60c2.76,0,5-2.24,5-5V70c0-2.76-2.24-5-5-5h-20c-2.76,0-5,2.24-5,5Z"
        />
        <path
          fill="#fff"
          d="M203,70v64.08c0,1.35.55,2.65,1.52,3.59l36.96,35.85c.97.94,1.52,2.24,1.52,3.59v22.89c0,2.76-2.24,5-5,5h0c-2.76,0-5-2.24-5-5v-19.95c0-2.76-2.24-5-5-5h-20c-2.76,0-5,2.24-5,5v49.95c0,2.76,2.24,5,5,5h60c2.76,0,5-2.24,5-5v-64.06c0-1.37-.56-2.67-1.55-3.61l-36.91-35.27c-.99-.94-1.55-2.25-1.55-3.61v-23.44c0-2.76,2.24-5,5-5h0c2.76,0,5,2.24,5,5v20c0,2.76,2.24,5,5,5h20c2.76,0,5-2.24,5-5v-25h0v-25c0-2.76-2.24-5-5-5h-60c-2.76,0-5,2.24-5,5Z"
        />
        <path
          fill="#fff"
          d="M151,230v-50c0-2.76,2.24-5,5-5h30c2.76,0,5-2.24,5-5v-100c0-2.76-2.24-5-5-5h-60c-2.76,0-5,2.24-5,5v160c0,2.76,2.24,5,5,5h20c2.76,0,5-2.24,5-5ZM156,145.58h0c-2.76,0-5-2.24-5-5v-40.58c0-2.76,2.24-5,5-5h0c2.76,0,5,2.24,5,5v40.58c0,2.76-2.24,5-5,5Z"
        />
        <path
          fill="#fff"
          d="M350,65h-20c-2.76,0-5,2.24-5,5v60c0,2.76-2.24,5-5,5h0c-2.76,0-5-2.24-5-5v-60c0-2.76-2.24-5-5-5h-20c-2.76,0-5,2.24-5,5v160c0,2.76,2.24,5,5,5h20c2.76,0,5-2.24,5-5v-60c0-2.76,2.24-5,5-5h0c2.76,0,5,2.24,5,5v60c0,2.76,2.24,5,5,5h20c2.76,0,5-2.24,5-5V70c0-2.76-2.24-5-5-5Z"
        />
        <path
          fill="#fff"
          d="M561,70c0-2.76-2.24-5-5-5h-60c-2.76,0-5,2.24-5,5v20c0,2.76,2.24,5,5,5h10c2.76,0,5,2.24,5,5v130c0,2.76,2.24,5,5,5h20c2.76,0,5-2.24,5-5V100c0-2.76,2.24-5,5-5h10c2.76,0,5-2.24,5-5v-20Z"
        />
        <rect
          fill="#00ff7e"
          x="367"
          y="65"
          width="30"
          height="30"
          rx="15"
          ry="15"
        />
        <path
          fill="#fff"
          d="M479,149.95v20c0,2.76-2.24,5-5,5h-30c-2.76,0-5,2.24-5,5v50.05c0,2.76-2.24,5-5,5h-20c-2.76,0-5-2.24-5-5V70c0-2.76,2.24-5,5-5h60c2.76,0,5,2.24,5,5v59.95c0,2.76-2.24,5-5,5h-20c-2.76,0-5-2.24-5-5v-29.95c0-2.76-2.24-5-5-5h0c-2.76,0-5,2.24-5,5v39.95c0,2.76,2.24,5,5,5h30c2.76,0,5,2.24,5,5Z"
        />
      </svg>
    );
}