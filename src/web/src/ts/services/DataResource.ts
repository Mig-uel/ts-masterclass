export class DataResource<T> {
  constructor(private endpoint: string) {}

  async getAll(): Promise<T[]> {
    const res = await fetch(this.endpoint)
    return res.json()
  }

  async getOne(id: number): Promise<T> {
    const res = await fetch(`${this.endpoint}/${id}`)
    return res.json()
  }

  async deleteOne(id: number): Promise<Response> {
    const res = await fetch(`${this.endpoint}/${id}`, {
      method: 'DELETE',
    })
    return res
  }

  async save(data: T): Promise<Response> {
    const res = await fetch(`${this.endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })

    return res
  }
}