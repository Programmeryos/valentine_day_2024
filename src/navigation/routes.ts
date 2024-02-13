export const ROUTES = {
  WelcomeScreen: "welcome",
  HomeScreen: "home"
} as const

type valueof<T> = T[keyof T]

export type Routes = valueof<typeof ROUTES>
