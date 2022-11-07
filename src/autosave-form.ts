type Options = {
  mode: 'timer' | 'event',
  interval ?: number,
  key ?: string
}

type Value = {
  label: string,
  value: string | number | null
}

class AuForm {
  constructor(public options: Options){}

  private intervalFunction(interval: number): void{
    setInterval(() => {
      const form = document.querySelectorAll(".as-form input, .as-form textarea, .as-form select") as NodeListOf<HTMLInputElement>;
      
      const values: Value[] = [];

      [...form].forEach(element => {
        const inputValue: Value = {
          label: element.getAttribute('name'),
          value: element.value
        }
        values.push(inputValue)
      })
      console.log(values)
    }, interval)
  }

  public init(): void {
    const mode = this.options.mode || 'timer'
    const interval = this.options.interval || 3000

    if(mode == 'timer'){
      this.intervalFunction(interval)
    }
    
  }
}

export default AuForm