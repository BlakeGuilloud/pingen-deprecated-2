export function sendSuccess(res) {
  return (data) => {
    res.status(200)
      .json(data);

    return null;
  };
}
