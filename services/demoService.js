// In-memory store
let widgets = [
  { id: 1, name: 'Widget A' },
  { id: 2, name: 'Widget B' }
];

exports.getAll = async () => widgets;

exports.getById = async id => widgets.find(w => w.id === id);

exports.create = async data => {
  const newWidget = { id: widgets.length + 1, ...data };
  widgets.push(newWidget);
  return newWidget;
};

