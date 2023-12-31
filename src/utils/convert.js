/** @format */

const GetCurrentIDNDate = () => {
  const currentDate = new Date().getDate();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const dueDate = new Date(currentYear, currentMonth, currentDate);
  const formattedDueDate = dueDate.toLocaleDateString('id-ID', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  return formattedDueDate;
};

const GetIDNDateFormat = (InputDate) => {
  const convertDate = new Date(InputDate);
  return convertDate.toLocaleDateString('id-ID', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
};

const GetIDNMoneyCurrency = (Money) => {
  return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Money);
};

module.exports = {
  GetCurrentIDNDate,
  GetIDNDateFormat,
  GetIDNMoneyCurrency,
};
