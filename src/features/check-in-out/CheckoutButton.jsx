import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCheckOut } from "./useCheckOut";

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkOut } = useCheckOut();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkOut(bookingId)}
      disabled={isCheckingOut}
    >
      {!isCheckingOut ? "Check out" : <SpinnerMini />}
    </Button>
  );
}

export default CheckoutButton;
