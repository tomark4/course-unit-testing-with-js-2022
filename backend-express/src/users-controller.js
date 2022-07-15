const users = []

export const storeUser = (req, res) => {
  try {
    const { id, name, address, age } = req.body
    users.push({ id, name, address, age })
    res.status(201).json({ ok: true, users })
  } catch (e) {
    res.status(500).json({ ok: false, error: e })
  }
}

export const getUsers = (req, res) => {
  res.status(200).json({ ok: true, users })
}

export const getUserById = (req, res) => {
  const user = users.find((user) => String(user.id) === String(req.params.id))
  res.status(200).json({ ok: true, user })
}

// borrar

// actualizar
