export function createQueue() {
  const items: string[] = []; //antrian_pasien['fadli', 'hifzi']

  function enqueue(namapasien: string): void {
    items.push(namapasien); //antrian_pasien['fadli', 'hifzi']
  }

  function dequeue(): string | undefined {
    return items.shift(); //antrian_pasien['fadli', hafzi]
  }

  function isEmpty(): boolean {
    return items.length === 0; //antrian_pasien['fadli'] == false
  }

  function getItems(): string[] {
    return [...items]; //['fadli', 'hifzi']
  }

  return {
    enqueue,
    dequeue,
    isEmpty,
    getItems,
  };
}
