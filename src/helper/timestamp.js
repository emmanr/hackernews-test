const timestamp = (time) => {
  const millisec = time * 1000;
  const fullDate = new Date(millisec);
  return fullDate.toLocaleString();
}

export default timestamp;
