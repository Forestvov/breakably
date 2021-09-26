import * as yup from 'yup'

export function escapeRegExp(stringToGoIntoTheRegex) {
  return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

export function replace(str, find, replace = '$&') {
  if (!find || !str) return str
  const regStr = escapeRegExp(find)
  const regex = new RegExp(regStr, "gi")
  return str.replace(regex, replace)
}

export const phoneMask = '+7 (999) 999-99-99'
export const phoneRegExp = new RegExp(escapeRegExp(phoneMask).replace(/9/g, '[0-9]'), 'gi')
export const phoneTest = phoneRegExp.test

function equalTo(ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path
    },
    test: function (value) {
      return value === this.resolve(ref)
    }
  })
}

yup.addMethod(yup.string, 'equalTo', equalTo)

// main template schema
const schemes = {
  phone: yup.string()
    .matches(phoneRegExp, 'Телефон введен некорректно')
    .required('Необходимо ввести телефон'),
  password: yup.string()
    .min(6, 'Минимально 6 символов')
    .required('Необходимо ввести пароль'),
  email: yup.string()
    .email('Недействительный email')
    .required('Необходимо ввести email'),
  code: yup.string()
    .min(6, 'Минимально 6 символов')
    .max(6, 'Максимум 6 символов')
    .required('Необходимо ввести код'),
}

// sign in schema
export const SignInSchema = yup.object().shape({
  phone: schemes.phone,
  password: schemes.password,
})

