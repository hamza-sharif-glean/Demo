// In-memory store
let widgets = [
  { id: 1, name: 'Widget A' },
  { id: 2, name: 'Widget B' }
];

/**
 * Returns widgets whose `name` includes the substring (case-insensitive)
 */
exports.findByName = async substring => {
  return widgets.filter(w =>
    w.name.toLowerCase().includes(substring.toLowerCase())
  );
};

exports.getAll = async () => widgets;

exports.getById = async id => widgets.find(w => w.id === id);

exports.create = async data => {
  const newWidget = { id: widgets.length + 1, ...data };
  widgets.push(newWidget);
  return newWidget;
};

