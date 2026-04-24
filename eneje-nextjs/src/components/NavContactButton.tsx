"use client";

export default function NavContactButton() {
  const handleClick = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="nav-cta" onClick={handleClick}>
      Contact
    </button>
  );
}
