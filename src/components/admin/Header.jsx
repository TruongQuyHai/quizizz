import { ButtonIcon, ButtonTextPrimary } from "./Button";
import Icon from "./Icon";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="p-0.5">
      <div className="d-flex">
        <SearchBar
          placeholder="Search"
          rightSection={
            <div
              style={{
                borderRadius: "inherit",
                flexShrink: 0,
              }}
              className="border-radius-inherit h-100% d-flex align-center pl-0.5 pr-0.25 py-0.5"
            >
              <ButtonIcon
                className="h-100% font-semibold text-sm"
                iconRight={
                  <Icon
                    className="fas fa-caret-down w-1.5 text-center"
                    fs="12px"
                  />
                }
              >
                Quizziz library
              </ButtonIcon>
            </div>
          }
        />

        <div style={{ flexShrink: 0 }} className="ml-0.5 pl-0.5">
          <ButtonTextPrimary
            style={{
              height: "100%",
            }}
            className="duration-200 py-0.25 px-1"
          >
            Enter code
          </ButtonTextPrimary>
        </div>

        <ButtonIcon
          iconOnly
          className="ml-0.5"
          style={{ width: 40, height: 40, flexShrink: 0 }}
          icon={<Icon className="fas fa-bell" fs="16px" />}
        />
      </div>
    </header>
  );
};

export default Header;
