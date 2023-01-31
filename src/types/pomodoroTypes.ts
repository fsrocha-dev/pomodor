export default interface IPomodoroOptions {
  cycle?: number;
  title?: string;
  description?: string | null;
  bigTitle?: boolean;
  alertSound?: boolean;
  notify?: boolean;
  style?: 'rainbow' | 'morning' | 'pastel' | 'mind' | 'retro'
}