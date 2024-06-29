import * as Import from "./imports";
import LogoNinja from "../../assets/navbar/logo-ninja.png";

export function NavbarComponent() {
  return (
    <>
      <Import.Navbar fluid rounded>
        <Import.NavbarBrand href="https://flowbite-react.com">
          <Import.Image
            src={LogoNinja}
            className="mr-3 h-16 w-16"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Ninja das Promoções
          </span>
        </Import.NavbarBrand>
        <Import.SearchInput className="input-container" />
        <div className="flex md:order-2">
          <Import.Dropdown
            arrowIcon={false}
            inline
            label={
              <Import.Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Import.DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Import.DropdownHeader>
            <Import.DropdownItem>Dashboard</Import.DropdownItem>
            <Import.DropdownItem>Settings</Import.DropdownItem>
            <Import.DropdownItem>Earnings</Import.DropdownItem>
            <Import.DropdownDivider />
            <Import.DropdownItem>Sign out</Import.DropdownItem>
          </Import.Dropdown>
          <Import.NavbarToggle />
        </div>
        <Import.NavbarCollapse>
          <Import.NavbarLink href="#" active>
            Home
          </Import.NavbarLink>
          <Import.NavbarLink href="#">About</Import.NavbarLink>
          <Import.NavbarLink href="#">Services</Import.NavbarLink>
          <Import.NavbarLink href="#">Pricing</Import.NavbarLink>
          <Import.NavbarLink href="#">Contact</Import.NavbarLink>
        </Import.NavbarCollapse>
      </Import.Navbar>
      <Import.SearchInput className="hidden-input-container mx-5" />
    </>
  );
}
