const service = require('../services/demoService');

describe('demoService', () => {
  it('returns all widgets', async () => {
    const all = await service.getAll();
    expect(Array.isArray(all)).toBe(true);
  });

  it('returns a widget by id', async () => {
    const widget = await service.getById(1);
    expect(widget).toHaveProperty('id', 1);
  });

  it('creates a new widget', async () => {
    const before = (await service.getAll()).length;
    const newW = await service.create({ name: 'Widget C' });
    expect(newW).toHaveProperty('id', before + 1);
    expect((await service.getAll()).length).toBe(before + 1);
  });


  it('filters by name substring', async () => {
    const results = await service.findByName('a');
    const names = results.map(r => r.name);
    expect(names).toContain('Widget A');
  });
});

