const widgetService = require('../services/widgetService');
// search widgets by name substring
exports.searchByName = async (req, res) => {
  const q = req.query.q || '';
  const results = await widgetService.findByName(q);
  res.json(results);
};
exports.getAll = async (req, res) => {
  const widgets = await widgetService.getAll();
  res.json(widgets);
};

exports.getById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const widget = await widgetService.getById(id);
  if (widget) {
    res.json(widget);
  } else {
    res.status(404).json({ message: 'Widget not found' });
  }
};

exports.create = async (req, res) => {
  const newWidget = await widgetService.create(req.body);
  res.status(201).json(newWidget);
};

