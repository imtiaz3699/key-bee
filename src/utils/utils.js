export const baseUrl = "http://51.20.36.76/";

export const selectStatusColor = (status) => {
  switch (status) {
    case "cancelled":
      return "bg-red-500";
      break;
    case "delivered":
      return "bg-yellow-600";
      break;
    case "inprogress":
      return "bg-blue-700";
      break;
    case "completed":
      return "bg-green-600";
      break;
    case "active":
      return "bg-green-600";
      break;
    default:
      return "bg-gray-500";
      break;
  }
};
