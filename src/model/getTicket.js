export function getTicket(url) {
  return this.$axios.get("/api/Weixin/GetTicket", {
    params: {
      url: url
    }
  });
}
