export default function calculteTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((total, item) => total + (item.count * item.price), 0);

  if (applyDiscount) {
    return sum * 0.891;
  }
  return sum;
}
