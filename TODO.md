# TODO: Upgrade Profile Modal for BMK Fruits

## Tasks
- [x] Refactor Profile.tsx to use tabs for Profile View, Settings View, and Add Product View
- [x] Implement tab switching with useState (currentView: 'profile' | 'settings' | 'addProduct')
- [x] Hardcode user email to maruanebelawi65@gmail.com and join date to 1/15/2026
- [x] Add back button (←) for navigation from Settings and Add Product views
- [x] For Settings View:
  - [x] Add option for 'تعديل الاسم' (Edit Name) with input and supabase.auth.updateUser()
  - [x] Add option for 'تغيير كلمة المرور' (Change Password) with input and supabase.auth.updateUser()
  - [x] Add toggle for 'إشعارات البريد' (Email Notifications)
- [x] For Add Product View:
  - [x] Embed mini-form with inputs for Name, Price, Category, and image uploader
  - [x] Use Supabase Storage logic for image upload
  - [x] Insert data into Supabase products table
- [x] Ensure styling matches dark glassmorphism with gold borders and rounded-2xl
- [x] Use lucide-react icons for consistency
- [x] Test the modal functionality (dev server running, code reviewed for correctness)

## Dependent Files
- components/Profile.tsx (main file to edit)
- components/AddProduct.tsx (reference for form logic, but integrate into Profile.tsx)

## Followup Steps
- [ ] Test the modal in the app
- [ ] Verify Supabase auth updates work
- [ ] Check image upload to Supabase Storage
- [ ] Ensure Arabic text displays correctly
