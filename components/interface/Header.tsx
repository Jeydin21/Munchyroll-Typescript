import Logo from "@/components/interface/Logo";

function Header() {
  return (
    <>
      <div
        className={`z-50 transition-all py-2 px-5 flex justify-between left-0 items-center top-0 right-0`}
      >
        <div className="z-50 flex flex-row space-x-5">
          <Logo />
        </div>
      </div>
    </>
  );
}

export default Header;