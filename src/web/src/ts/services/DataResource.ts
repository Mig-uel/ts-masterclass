export class DataResource<T> {
  constructor(private endpoint: string) {}

  async getAll() {}
  async getOne(id: number) {}
  async deleteOne(id: number) {}
  async save(data: T) {}
}
