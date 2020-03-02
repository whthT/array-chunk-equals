declare module 'array-chunk-equals' {
  export default function chunkEquals<T>(input: T[], size: number): Array<T[]>;
}