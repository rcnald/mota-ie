import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export function sliptText(text: string) {
  const textWords = text.split(' ')
  const textLastWordIndex = textWords.length - 1
  const textLastWord = textWords[textLastWordIndex]
  const textWithOutLastWord = textWords.reduce((acc, word) => {
    return textLastWord !== word ? (acc += `${word} `) : acc
  }, '')

  return { textWithOutLastWord, textLastWord }
}
