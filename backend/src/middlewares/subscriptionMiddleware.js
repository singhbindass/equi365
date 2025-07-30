export const subscriptionMiddleware = (plans) => {
  return (req, res, next) => {
    if (!plans.includes(req.user.subscription)) {
      return res.status(403).json({ message: 'Upgrade required' });
    }
    next();
  };
};
