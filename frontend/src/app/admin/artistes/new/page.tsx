'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { adminApi } from '@/lib/api'
import Button from '@/components/ui/Button'
import ImageUpload from '@/components/admin/ImageUpload'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { toast } from 'sonner'

export default function NewArtistePage() {
  const router = useRouter()
  const { register, handleSubmit, watch, setValue, formState: { isSubmitting } } = useForm({
    defaultValues: { name: '', photo: '', country: '', bio: '' },
  })

  const photo = watch('photo')

  const mutation = useMutation({
    mutationFn: (data: any) => adminApi.createArtist(data),
    onSuccess: () => { toast.success('Artiste créé'); router.push('/admin/artistes') },
    onError: (err: any) => toast.error(err?.response?.data?.message || 'Erreur lors de la création'),
  })

  return (
    <div className="max-w-xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/artistes" className="text-[#555555] hover:text-black"><ArrowLeft size={18} /></Link>
        <h1 className="font-bebas text-4xl">Nouvel artiste</h1>
      </div>

      <form onSubmit={handleSubmit((d) => mutation.mutate(d))} className="bg-white border border-[#CCCCCC] p-6 flex flex-col gap-5">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#555555] mb-2">Nom *</label>
          <input {...register('name', { required: true })} className="w-full border border-[#CCCCCC] px-3 py-2.5 text-sm focus:border-black outline-none" placeholder="Nom de l'artiste" />
        </div>
        <ImageUpload
          label="Photo"
          value={photo}
          onChange={(url) => setValue('photo', url)}
        />
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#555555] mb-2">Pays</label>
          <input {...register('country')} className="w-full border border-[#CCCCCC] px-3 py-2.5 text-sm focus:border-black outline-none" placeholder="France" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#555555] mb-2">Biographie</label>
          <textarea {...register('bio')} rows={4} className="w-full border border-[#CCCCCC] px-3 py-2.5 text-sm focus:border-black outline-none resize-none" />
        </div>
        <Button type="submit" loading={isSubmitting}>Créer l'artiste</Button>
      </form>
    </div>
  )
}
