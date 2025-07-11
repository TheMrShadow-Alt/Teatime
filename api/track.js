let activeUsers = new Set();

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  activeUsers.add(ip);
  setTimeout(() => activeUsers.delete(ip), 60000); // 1 minute timeout
  res.status(200).json({ activeUsers: activeUsers.size });
}
