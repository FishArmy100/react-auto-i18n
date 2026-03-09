[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../README.md) / useI18n

# Function: useI18n()

> **useI18n**(): [`I18nContextType`](../interfaces/I18nContextType.md)

Defined in: [components/I18nProvider.tsx:144](https://github.com/FishArmy100/react-auto-i18n/blob/ea05449f0c4d38e6a5ffc7d4a8223622f335cb56/packages/react-auto-i18n/src/components/I18nProvider.tsx#L144)

Allows for the modification and usage of the global database and locale states. Must be used on the context of a `I18nProvider`.

### **Example:**
```ts
const i18n = useI18n();
i18n.setLocale("spa_Latn");

let msg = __t("message", "Hello!");
console.log(msg); // Hola!
```

## Returns

[`I18nContextType`](../interfaces/I18nContextType.md)

The instance of the current `I18nContext`
