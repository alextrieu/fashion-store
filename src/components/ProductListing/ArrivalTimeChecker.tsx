export default function ArrivalTimeChecker() {
  return (
    <div className="flex items-center gap-4">
      <i className="fa-solid fa-truck text-3xl transform scale-x-[-1]"></i>
      <p className="text-lg">
        {" "}
        Enter your zip code{" "}
        <span style={{ color: "#FFD38F" }} className="font-bold">
          here
        </span>{" "}
        to find out when this item arrives
      </p>
    </div>
  );
}
